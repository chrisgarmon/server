var QueryFields;
(function() {
    dependenciesLoader(["$", "React", "ReactDOM", "Loader", "PanelFlow", "Typeahead", "Switchery", "QueryResultPreview", "panelFlow" /* Instance of the flow */], function(){
        // Generates the entire block of the page
        QueryFields = React.createClass({
            getInitialState: function () {
                return {
                    query                  : {},
                    schema                 : [],
                    schema_copy            : [],
                    schema_text            : [],
                    selected_fields        : [],
                    available_fields       : [],
                    clicked_table          : "",
                    filter_available       : true,
                    searchString           : "",
                    loadingAvailableFields : true,
                    updatingDatabaseShema  : false,
                    declaredCallbacks      : false // Whether or not we have delared all of the callbacks
                };
            },
            // Select a table as current table
            selectTable: function(key){
                this.setState({
                    clicked_table: key,
                });
            },
            // Select a field and add it in the displayed list
            selectField: function(field_id){
                Synchronise.Cloud.run("selectFieldForQuery", {id_query: this.state.query.id, field_id: field_id}, {
                    success: function (result) {}
                });
            },
            // Unselect a field and remove it from the displayed list
            unselectField: function (field_id) {
                Synchronise.Cloud.run("unSelectFieldForQuery", { id_query: this.state.query.id, id: field_id }, {
                    success: function (result) {}
                });
            },
            componentDidMount: function () {
                var target = this;

                // Switcher for the fields to display on the schema (only available/all)
                var elem = document.querySelector('.js-switch');
                var init = new Switchery(elem);

                $("#blocks").on('panelWillAppear', function(e, block){
                    if(block.blockId() == "fields"){
                        $("#titleBlock h1 small").text("Select the fields to display");
                        $("#blocks").opacity = 1;

                        var query_id = urlH.getParam("query");

                        if(query_id && !target.state.declaredCallbacks){
                            target.setState({
                                declaredCallbacks : true
                            });

                            Synchronise.Cloud.run("getQuery", {id_query: query_id, realtime: false}, {
                                success: function (query) {
                                    target.setState({
                                        query: query
                                    });

                                    Synchronise.Cloud.run("getDataStoreSchema", {db_id: query.db_id, realtime: true}, {
                                        success: function (db) {
                                            target.setState({
                                                schema: db.data
                                            }, target.manageSelectedFields);

                                        }
                                    });
                                }
                            });

                            Synchronise.Cloud.run("getSelectedFieldsForQuery", {id_query: query_id, realtime: true}, {
                                success: function (result) {
                                    var sel = result.sort(function (a, b) {
                                        if (a.tableName < b.tableName) {
                                            return -1;
                                        }
                                        if (a.tableName > b.tableName) {
                                            return 1;
                                        }
                                        return 0;
                                    });

                                    target.setState({
                                        selected_fields: sel
                                    }, target.manageSelectedFields);
                                }
                            });

                            Synchronise.Cloud.run("getUnselectedFieldsForQuery", {id_query: query_id, realtime: true}, {
                                success: function(data){
                                    target.setState({ available_fields: data });
                                },
                                always: function(){
                                    target.setState({loadingAvailableFields: false});
                                }
                            });
                        }
                    }
                });
            },
            fieldSelected: function (value) {
                this.selectField(value.item.fieldId);
            },
            updateSchemaDB: function(){
                var target = this;

                if(!target.state.updatingDatabaseShema &&
                    typeof(target.state.query.db_id) != "undefined"){
                    target.setState({updatingDatabaseShema: true});
                    DatabaseFunctions.updateDatabase(target.state.query.db_id).then(function(){
                        target.setState({updatingDatabaseShema: false});
                    }, function(err){
                        new ModalErrorParse(err);
                    });
                }
            },
            goToDatastore: function(){
                panelFlow.scrollToBlock("dataSources");
            },
            render: function () {
                var TypeaheadText = [];
                // Only displays the fields that we have not selected already
                if(this.state.filter_available){
                    this.state.available_fields.forEach(function(elem){
                        TypeaheadText.push({
                            text    : elem.tableName + ": " + elem.fieldName,
                            fieldId : elem.displayedFieldId
                        });
                    });
                }else{ // Displays all of the fields
                    this.state.schema.forEach(function (elem, key) {
                        elem.fields.forEach(function (elem2, key2) {
                            TypeaheadText.push({
                                text: elem.table + ": " + elem2.name,
                                fieldId: elem2.id
                            });
                        });
                    });
                }

                var classUpdateSchemaButton = "";
                if(this.state.updatingDatabaseShema){
                    classUpdateSchemaButton = "fa-spin";
                }

                var content = "";
                // If there is a query

                if(Object.keys(this.state.query).length){
                    content = (
                        <div className="row">
                            <div className="col-xs-12" align="center">
                                <div className='queryFieldsLoading'>
                                    <div className='bullet'></div>
                                    <div className='bullet'></div>
                                    <div className='bullet'></div>
                                    <div className='bullet'></div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                <div className="col-xs-12">
                                    <legend>Schema
                                        <button
                                            onClick={this.updateSchemaDB}
                                            className="btn btn-xs btn-default pull-right refreshSchema cbutton cbutton--effect-novak">
                                            <i className={"fa fa-refresh " + classUpdateSchemaButton}></i> Update schema
                                        </button>
                                    </legend>
                                </div>

                                <Typeahead type="text"
                                           className="form-control input-lg"
                                           placeholder="Type in the name of a field and use the autocompletion to find the fields faster."
                                           value={this.state.searchString}
                                           options={TypeaheadText}
                                           onSelected={this.fieldSelected}
                                           ref="addMemberInput"/>

                                <br/>

                                <QueryFieldsSchema schema={this.state.available_fields}
                                                   loading={this.state.loadingAvailableFields}
                                                   filter_available={this.state.filter_available}
                                                   selectedTableName={this.state.clicked_table}
                                                   selectedFields={this.state.selected_fields}
                                                   selectField={this.selectField}
                                                   selectTable={this.selectTable}/>

                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                <div className="row-fluid">
                                    <div className="col-xs-12">
                                        <legend>Selected fields</legend>
                                    </div>

                                    <QueryFieldsSelected selectedFields={this.state.selected_fields}
                                                         unselectField={this.unselectField}/>

                                    <div className="col-sm-12 col-xs-12 visible-xs visible-sm">
                                        <br/>
                                    </div>
                                </div>
                            </div>

                            <div className="codeContainer col-lg-4 col-md-12 col-sm-12 col-xs-12">
                                <div className="col-xs-12">
                                    <legend style={{marginBottom: "10px"}}>Result</legend>
                                    <QueryResultPreview id_query={urlH.getParam("query")}/>
                                </div>
                            </div>
                        </div>
                    );
                }else{ // There is no query
                    content = (
                        <div className="row" style={{textAlign: "center"}}>
                            You need to select a Data store before you can select any fields for this query. Go to the <a onClick={this.goToDatastore}>Data Store</a> section.
                        </div>
                    );
                }

                return (
                    <div>
                        <p align="center">The fields of a query are the data you want the query to return. You can display
                            anything from the datastore you selected. The <b>result block</b> represents the json data that
                            will be contained in your query result when you execute it.</p>
                        <hr/>

                        {content}
                    </div>
                );
            }
        });

        // Displays the schema of selected fields on the left side of the page
        // Props :
        // - [object]selectedFields                           : List of fields that have been selected
        // - [function]unselectField(idOfTheFieldToBeRemoved) : Callback to be triggered when the user clicks on the remove button of a field
        var QueryFieldsSelected = React.createClass({
            render: function () {
                var target = this;
                return (
                    <div className="fieldsList col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                            {this.props.selectedFields.map(function (field, key) {
                                return (<QueryFieldSelectedItem table={field.tableName}
                                                                field={field.fieldName}
                                                                unselectField={target.props.unselectField.bind(null, field.displayedFieldId)}
                                                                key={field.displayedFieldId}/>);
                            })}
                        </div>
                    </div>
                );
            }
        });

        // Displays on field on the schema on the left side of the page
        // Props :
        // - [function]unselectField : Callback to trigger when the user clicks on the button to unselect the field
        // - [String]table           : Table name
        // - [String]field           : Field name
        var QueryFieldSelectedItem = React.createClass({
            getInitialState: function(){
                return {
                    disappear: false
                };
            },
            handleClick: function(){
                this.setState({
                    disappear: true
                });

                this.props.unselectField();
            },
            render: function () {
                var animation = this.state.disappear ? "fadeOutBackground" : "fadeInListDataStorePanel";

                return (
                    <div className={animation+" table"}>
                        <span className="title">{this.props.table}</span>
                        <span className="field">{this.props.field}</span>
                        <i className="remove fa fa-times" onClick={this.handleClick}></i>
                    </div>
                );
            }
        });

        // Displays the schema of the datastore on the right side of the page
        // Props :
        // - [object]schema                                   : The schema of the database
        // - [String]selectedTableName                        : Name of the table that is currently selected
        // - [object]selectTable(indexOfTheSelectedTable)     : Callback to trigger whenever a table is clicked
        // - [object]selectField(idOfTheFieldInSynchroniseDB) : Callback to trigger whenever a field is clicked
        var QueryFieldsSchema = React.createClass({
            render: function () {
                var target = this;
                var content = "";

                if(this.props.loading){
                    content = <Loader/>;
                }else{
                    if(this.props.schema.length){
                        var schemaFormatted = {};
                        _.each(this.props.schema, function(item){
                            if(typeof(schemaFormatted[item.tableName]) == "undefined"){
                                schemaFormatted[item.tableName] = [];
                            }
                            schemaFormatted[item.tableName].push({
                                name : item.fieldName,
                                id   : item.displayedFieldId
                            });
                        });

                        var fields = "";

                        if(target.props.selectedTableName.length){
                            fields = (
                                <div className="fields col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                    {_.map(schemaFormatted[target.props.selectedTableName], function(field){
                                        return (<QueryFieldsSchemaField field={field.name}
                                                                        selectField={target.props.selectField.bind(null, field.id)}
                                                                        key={field.name+target.props.selectedTableName} />);
                                    })}
                                </div>
                            );
                        }

                        content = (
                            <div className="schema col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="tables col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                    {_.map(Object.keys(schemaFormatted), function(table, index){
                                        return (<QueryFieldsSchemaTable table={table}
                                                                        activeTableName={target.props.selectedTableName}
                                                                        selectTable={target.props.selectTable.bind(null, table)}
                                                                        key={table}/>);
                                    })}
                                </div>
                                {fields}
                            </div>
                        );
                    }else{
                        if(this.props.filter_available){
                            content = (<p style={{textAlign:"center"}}>All of the fields of the database have been selected</p>);
                        }
                    }
                }

                return content;
            }
        });

        // Displays a table on the schema on the right of the page
        // Props :
        // - [String]table         : the table name
        // - [function]selectTable : Callback to be triggered when the table is clicked/selected
        var QueryFieldsSchemaTable = React.createClass({
            handleClick: function(){
                this.props.selectTable();
            },
            render: function () {
                var activeClass = "";

                if(this.props.activeTableName == this.props.table){
                    activeClass = "active";
                }

                return (
                    <div onClick={this.handleClick} className={"table " + activeClass}>
                        {this.props.table}
                    </div>
                );
            }
        });

        // Displays one field on the schema on the right side of the page
        // Props :
        // - [String]field         : the field name
        // - [function]selectField : Callback to be triggered when the field is clicked/selected
        var QueryFieldsSchemaField = React.createClass({
            getInitialState: function(){
                return {
                    disappear: false,
                    clickable: true
                };
            },
            handleClick: function(){
                this.setState({
                    disappear: true,
                    clickable: false
                });

                if(this.state.clickable){
                    this.props.selectField();
                }
            },
            render: function () {
                var animation = this.state.disappear ? "fadeOutBackground" : "fadeInListDataStorePanel";

                return (<div onClick={this.handleClick}
                             className={animation + " field"}>{this.props.field}</div>);
            }
        });

        ReactDOM.render(<QueryFields />, document.getElementById("fields"));
    });
})();

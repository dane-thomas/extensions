export const SEARCH_TEMPLATE = `
<md-input-container ng-controller="SearchCtrl as ctrl" md-no-float class="rv-table-search md-block">
    <input
        ng-model="ctrl.searchText"
        ng-keyup="ctrl.updatedSearchText()"
        placeholder="{{ 't.search.placeholder' | translate }}" />
    <md-icon ng-if="ctrl.searchText.length > 2" ng-click="ctrl.clearSearch()" md-svg-src="navigation:close"></md-icon>
    <md-icon ng-if="ctrl.searchText.length <= 2" md-svg-src="action:search">
        <md-tooltip>{{ 't.search.placeholder' | translate }}</md-tooltip>
    </md-icon>
</md-input-container>

<span class="rv-table-divider"></span>
`;

export const MENU_TEMPLATE = `
<md-menu-bar ng-controller="MenuCtrl as ctrl">
    <md-menu md-position-mode="target-right target">

        <md-button
            aria-label="Menu"
            class="md-icon-button black rv-button-24"
            ng-click="$mdOpenMenu($event)">
            <md-icon md-svg-src="navigation:more_vert"></md-icon>
        </md-button>

        <md-menu-content rv-trap-focus="{{::ctrl.appID}}" class="rv-menu rv-dense" width="5">

            <md-menu-item type="radio" ng-model="ctrl.maximized" value="false" ng-click="ctrl.setSize(ctrl.maximized)" rv-right-icon="none">
                {{ 't.menu.split' | translate }}
            </md-menu-item>

            <md-menu-item type="radio" ng-model="ctrl.maximized" value="true" ng-click="ctrl.setSize(ctrl.maximized)" rv-right-icon="none">
                {{ 't.menu.max' | translate }}
            </md-menu-item>

            <md-menu-divider class="rv-lg"></md-menu-divider>

            <md-menu-item type="checkbox" ng-model="self.filter.isActive" ng-click="self.applyFilter(self.filter.isActive)" rv-right-icon="community:filter">
                {{ 't.menu.filter.extent' | translate }}
            </md-menu-item>

            <md-menu-divider></md-menu-divider>

            <md-menu-item>
                <md-button ng-click="ctrl.print()">
                    <md-icon md-svg-icon="action:print"></md-icon>
                    {{ 't.menu.print' | translate }}
                </md-button>
            </md-menu-item>

            <md-menu-item>
                <md-button ng-click="ctrl.export()">
                    <md-icon md-svg-icon="editor:insert_drive_file"></md-icon>
                    {{ 't.menu.export' | translate }}
                </md-button>
            </md-menu-item>

        </md-menu-content>
    </md-menu>
</md-menu-bar>
`;

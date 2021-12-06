import {BasicTable} from "./Table/BasicTable";
import {SortingTable} from "./Table/SortingTable";
import {FilteringTable} from "./Table/FilteringTable";
import {PaginationTable} from "./Table/PaginationTable";
import {RowSelection} from "./Table/RowSelection";
import {ColumnOrder} from "./Table/ColumnOrder";
import {ColumnHiding} from "./Table/ColumnHiding";
import {StickyTable} from "./Table/StickyTable";

export const OurTeam = () => {
    return (
        <div>
            {/*<BasicTable />*/}
            {/*<SortingTable />*/}
            {/*<FilteringTable />*/}
            <PaginationTable />
            {/*<RowSelection />*/}
            {/*<ColumnOrder />*/}
            {/*<ColumnHiding />*/}
            {/*<StickyTable />*/}
        </div>
    )
}
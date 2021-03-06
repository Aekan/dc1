export default class Table {
    width: number;
    height: number;
    table: HTMLDivElement;
    cells: Array<HTMLDivElement>;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
        this.cells = [];

        this.table = this._createTable();
    }

    public getTableElement() {
        return this.table;
    }

    private _createTable() {
        let table = document.createElement("div");
        table.id = "myTable";
        table.className = "myTableClass";

        for (let i = 0; i < this.height; ++i) {
            var row = document.createElement("div");
            row.id = "r" + i;
            row.className = "row";

            for (let j = 0; j < this.width; ++j) {
                var column = document.createElement("div");
                column.id = "c" + i + j;
                column.className = "cell";
                //column.innerText = (i+ 1) + "." + (j + 1);

                row.appendChild(column);
                this.cells.push(column);
            }

            table.appendChild(row);
        }

        return table;
    }
  }
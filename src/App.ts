import Table from './Table';
import Player from './Player';

export default class App {
    root: HTMLDivElement = <HTMLDivElement>document.getElementById("appRoot");
    table: Table = new Table(10, 10);
    player: Player = new Player();

    run() {
        this.root.appendChild(this.table.getTableElement());
        this.player.spawn(this.table.cells[0]);
    }

    stop() {
        this.root.removeChild(this.table.getTableElement());
    }
}
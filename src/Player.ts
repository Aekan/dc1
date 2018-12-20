export default class Player {
  position: [number, number] = [0, 0];
  playerObject: HTMLDivElement;
  currentPosition: HTMLDivElement;

  constructor() {
    this.playerObject = document.createElement("div");
    this.playerObject.id = "player";
  }

  public spawn(spawnPoint: HTMLDivElement) {
    this.currentPosition = spawnPoint;
    this.currentPosition.appendChild(this.playerObject);
    this._setEventListener();
  }

  public move(e: KeyboardEvent) {
    switch (e.key) {
      case "Down":
      case "ArrowDown":
        this._goDown();
        break;
      case "Up": // IE/Edge specific value 
      case "ArrowUp":
        // Do something for "up arrow" key press.
        break;
      case "Left": // IE/Edge specific value
      case "ArrowLeft":
        // Do something for "left arrow" key press.
        break;
      case "Right": // IE/Edge specific value
      case "ArrowRight":
        // Do something for "right arrow" key press.
        break;
    }
  }

  private _setEventListener() {
    document.body.addEventListener(
      "keydown",
      (e: KeyboardEvent) => this.move(e)
    );
  }

  private _goDown() {
    this.position[1] += 1;
    this.currentPosition.removeChild(this.playerObject);
  }
}
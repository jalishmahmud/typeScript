
interface RectangleOptions{
    width: number;
    height: number;

}

function drawRectangle(options:RectangleOptions) {
    let width = options.width;
    let height = options.height;
}

drawRectangle({
    width: 30,
    height: 30,
})
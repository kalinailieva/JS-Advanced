function solve(input) {
  function createRectangle(width, height) {
    let rectangle = {
      width: width,
      height: height,
      area: function () {
        return this.width * this.height;
      },
      compareTo: function (otherRectangle) {
        return (
          otherRectangle.area() - this.area() ||
          otherRectangle.width - this.width
        );
      },
    };
    return rectangle;
  }
  let rectangleCollection = [];
  for(let [width, height] of input){
      rectangleCollection.push(createRectangle(width, height));
  }
  let sortedRectangles = rectangleCollection.sort((a,b) => a.compareTo(b));
  return sortedRectangles;
}


public class Rectangle implements Shape {
	private double rectArea, len, width;

	Rectangle(double len, double width) {
		this.len = len;
		this.width = width;
	}

	@Override
	public double calculate_area() {
		rectArea = this.len * this.width;
		return rectArea;
	}
}

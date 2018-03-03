
public class Square implements Shape {
	private double sqrArea, len;

	Square(double len) {
		this.len = len;
	}

	@Override
	public double calculate_area() {
		sqrArea = this.len * this.len;
		return sqrArea;
	}
}


public class Triangle implements Shape {
	private double triArea, tri_base, tri_hight;

	Triangle(double tri_base, double tri_hight) {
		this.tri_base = tri_base;
		this.tri_hight = tri_hight;
	}

	@Override
	public double calculate_area() {
		// TODO Auto-generated method stub
		triArea = 0.5 * this.tri_base * this.tri_hight;
		return triArea;
	}
}

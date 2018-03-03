
public class CalculateAreaDemo {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Shape shp = new Square(12);
		System.out.println("Area of Square : " + shp.calculate_area());

		Shape shp_1 = new Rectangle(10, 7);
		System.out.println("Area of Rectangle : " + shp_1.calculate_area());

		Shape shp_2 = new Triangle(18, 7);
		System.out.println("Area of Triangle : " + shp_2.calculate_area());
	}
}

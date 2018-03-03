import static org.junit.Assert.*;

import org.junit.Test;

public class MyInterfaceTest {

	@Test
	public void test1() {
		Shape shp = new Square(12);
		double c_area = shp.calculate_area();
		assertTrue(c_area == 144.0);
	}
	
	@Test
	public void test2() {
		Shape shp_1 = new Rectangle(10, 7);
		double r_area = shp_1.calculate_area();
		assertTrue(r_area == 70.0);
	}
	
	@Test
	public void test3() {
		Shape shp_3 = new Triangle(18,7);
		double s_area = shp_3.calculate_area();
		assertTrue(s_area == 63.0);
	}
}

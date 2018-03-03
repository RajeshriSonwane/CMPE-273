import static org.junit.Assert.*;

import org.junit.Test;

public class ArrayTest {

	ArithmeticArray arObj = new ArithmeticArray();
	int[] ageArray = { 15, 26, 58, 95, 16, 42 };

	@Test
	public void test1() {
		int avgAge = arObj.findAverageAge(ageArray);
		assertEquals(42, avgAge);
	}

	@Test
	public void test2() {
		int minAge = arObj.findMinAge(ageArray);
		assertEquals(15, minAge);
	}

	@Test
	public void test3() {
		int maxAge = arObj.findMaxAge(ageArray);
		assertEquals(95, maxAge);
	}
}

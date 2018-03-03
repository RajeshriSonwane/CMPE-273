import static org.junit.Assert.*;

import org.junit.Test;

public class MyGenericsTest {

	@Test
	public void test() {
		GenericSearch genObj = new GenericSearch();
		Integer[] intArr = { 19, 12, 73, 44, 12 };

		int count = genObj.SearchValue(intArr, 12);
		assertEquals(2, count);
	}
}

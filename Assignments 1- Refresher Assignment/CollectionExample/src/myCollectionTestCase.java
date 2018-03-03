import static org.junit.Assert.*;

import java.util.HashMap;
import java.util.Map;

import org.junit.Test;

public class myCollectionTestCase {

	@Test
	public void test() {
		Map<String, String> mpObj = new HashMap<String, String>();
		mpObj.put("USA", "Washington");
		mpObj.put("India", "Delhi");

		MySearch ms = new MySearch();
		String capital = ms.searchVal(mpObj, "USA");
		assertEquals("Washington", capital);
	}
}

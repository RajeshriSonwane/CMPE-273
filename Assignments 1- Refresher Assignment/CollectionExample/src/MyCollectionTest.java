import java.util.HashMap;
import java.util.Map;

public class MyCollectionTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Map<String, String> mpObj = new HashMap<String, String>();
		mpObj.put("USA", "Washington");
		mpObj.put("India", "Delhi");
		mpObj.put("Spain", "Madrid");
		System.out.println("Map Elements : " + mpObj);

		MySearch ms = new MySearch();
		System.out.println("Capital of India : " + ms.searchVal(mpObj, "India"));
	}
}

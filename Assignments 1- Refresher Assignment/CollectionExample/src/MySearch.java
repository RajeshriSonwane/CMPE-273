import java.util.Iterator;
import java.util.Map;
import java.util.Set;
import java.util.Map.Entry;

public class MySearch {
	private String retVal;

	public String searchVal(Map mpObj, String strVal) {
		Set eSet = mpObj.entrySet();
		Iterator sItr_1 = eSet.iterator();

		while (sItr_1.hasNext()) {
			Map.Entry mpEntry = (Entry) sItr_1.next();
			if (mpEntry.getKey() == strVal) {
				 retVal = (String) mpEntry.getValue();		
			}
		}
		return retVal;
	}
}

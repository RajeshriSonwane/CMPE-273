
public class GenericSearch {

	public <E> int SearchValue(E[] ipArr, Number searchVal) {
		int count = 0;
		for (E val : ipArr) {
			if (val.equals(searchVal) == true) {
				count += 1;
			}
		}
		return count;
	}
}

public class GenericArrayDemo {

	public static <E> void displayArray(E[] ipArr) {
		System.out.print("\nArray Elements are : { ");
		for (E val : ipArr) {
			System.out.print(val + " ");
		}
		System.out.println("}");
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Double[] doubleArr = { 10.0, 132.5 };
		Integer[] intArr = { 19, 12, 73, 44, 12 };
		String[] strArr = { "USA", "Spain", "India" };
		
		displayArray(intArr);
		displayArray(strArr);
		
		GenericSearch genObj=new GenericSearch();

		System.out.println("\nSearch count for 12 in Integer array is :" + genObj.SearchValue(intArr, 12));
		System.out.println("\nSearch count for 10.0 in Double array is :" + genObj.SearchValue(doubleArr, 10.0));
	}
}
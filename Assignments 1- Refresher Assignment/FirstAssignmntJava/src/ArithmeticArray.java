public class ArithmeticArray {

	public static void main(String[] args) {

		int[] ageArray = { 15, 26, 58, 95, 16, 42 };

		ArithmeticArray arr1 = new ArithmeticArray();

		arr1.displayArray(ageArray);
		System.out.println("Average age : " + arr1.findAverageAge(ageArray));
		System.out.println("Max age : " + arr1.findMaxAge(ageArray));
		System.out.println("Min age : " + arr1.findMinAge(ageArray));
	}

	public void displayArray(int[] ageArray) {
		System.out.print("Given Array is - {");
		for (int i = 0; i < ageArray.length; i++) {
			System.out.print(" " + ageArray[i]);
		}
		System.out.println("}");
	}

	public int findMaxAge(int[] ageArray) {
		int maxAge = ageArray[0];
		for (int i = 0; i < ageArray.length; i++) {
			if (ageArray[i] > maxAge) {
				maxAge = ageArray[i];
			}
		}
		return maxAge;
	}

	public int findMinAge(int[] ageArray) {
		int minAge = ageArray[0];
		for (int i = 0; i < ageArray.length; i++) {
			if (ageArray[i] < minAge) {
				minAge = ageArray[i];
			}
		}
		return minAge;
	}

	public int findAverageAge(int[] ageArray) {
		int total = 0, avgAge = 0;

		for (int i = 0; i < ageArray.length; i++) {
			total = total + ageArray[i];
		}
		avgAge = total / ageArray.length;
		return avgAge;
	}
}
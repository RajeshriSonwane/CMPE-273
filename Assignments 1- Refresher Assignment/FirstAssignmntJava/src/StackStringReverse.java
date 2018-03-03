import java.util.Stack;

public class StackStringReverse {

	public static String reverseString(String str) {
		// TODO Auto-generated method stub
		Stack<Character> myStack1 = new Stack<Character>();

		char[] ch = str.toCharArray();
		for (int i = 0; i < ch.length; i++) {
			myStack1.push(ch[i]);
		}

		String revString = "";
		for (int i = 0; i < ch.length; i++) {
			revString = revString + String.valueOf(myStack1.pop());
		}
		return revString;
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		String str = "SanJose";
		String revString = reverseString(str);

		System.out.println("Original String - " + str);
		System.out.println("Reservesed String - " + revString);
	}
}

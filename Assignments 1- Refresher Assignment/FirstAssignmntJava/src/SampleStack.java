import java.util.Stack;

public class SampleStack {

	static void PopElement(Stack<String> myStack1) {
		System.out.println("pop(" + myStack1.pop() + ")");
		System.out.println("\nAfter poping Stack Elements:" + myStack1);
	}

	static void PushElement(Stack<String> myStack1, String s1) {
		System.out.println("push(" + myStack1.push(s1) + ")");
		System.out.println("\nAfter pushing Stack Elements:" + myStack1);
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Stack<String> myStack1 = new Stack<String>();

		myStack1.push("White");
		myStack1.push("Black");

		System.out.println("The elements in tha stack are = " + myStack1);

		PushElement(myStack1, "Blue");
		PushElement(myStack1, "Yellow");
		PopElement(myStack1);
	}
}

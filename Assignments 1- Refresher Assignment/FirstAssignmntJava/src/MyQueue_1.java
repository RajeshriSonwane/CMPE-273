import java.util.Queue;

public class MyQueue_1 {
	public int calculateSize(Queue<Integer> myQueue1) {
		System.out.println("The size of the queue - " + myQueue1.size());
		return myQueue1.size();
	}

	public Queue<Integer> deleteElement(Queue<Integer> myQueue1) {
		myQueue1.remove();
		System.out.println("Queue after deleting element - " + myQueue1);
		return myQueue1;
	}

	public Queue<Integer> insertElement(Queue<Integer> myQueue1, int i) {
		myQueue1.add(i);
		System.out.println("Queue after adding element - " + myQueue1);
		return myQueue1;
	}
}

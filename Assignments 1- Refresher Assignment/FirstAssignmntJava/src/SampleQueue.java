import java.util.LinkedList;
import java.util.Queue;

public class SampleQueue {
	public static void main(String[] args) {
		Queue<Integer> myQueue1 = new LinkedList<Integer>();
		MyQueue_1 mq=new MyQueue_1();
		
		System.out.println("Initial Queue - " + myQueue1);

		mq.insertElement(myQueue1, 56);
		mq.insertElement(myQueue1, 10);
		mq.insertElement(myQueue1, 96);

		mq.calculateSize(myQueue1);

		mq.deleteElement(myQueue1);
	}
}

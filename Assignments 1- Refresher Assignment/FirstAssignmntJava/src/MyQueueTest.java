import static org.junit.Assert.*;

import java.util.LinkedList;
import java.util.Queue;

import org.junit.Test;

public class MyQueueTest {
	@Test
	public void test() {
		MyQueue_1 mq = new MyQueue_1();

		Queue<Integer> mq1 = new LinkedList<Integer>();
		mq1.add(10);
		mq1.add(20);

		int size = mq.calculateSize(mq1);
		assertEquals(2, size);
	}
}

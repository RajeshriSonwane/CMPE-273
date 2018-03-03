import static org.junit.Assert.*;

import org.junit.Test;

public class ThreadTest {

	@Test
	public void test1() {
		MyTestThread mthread = new MyTestThread("Process A");
		assertEquals("Process A", mthread.myThreadName);
	}

	@Test
	public void test2() {
		assertNotNull(Thread.activeCount());
	}
}

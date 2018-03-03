import static org.junit.Assert.*;

import org.junit.Test;

public class ResversedStringTest {

	@Test
	public void test() {
		String revStr = StackStringReverse.reverseString("SanJOse" );
		assertEquals("esOJnaS",revStr);
	}
}

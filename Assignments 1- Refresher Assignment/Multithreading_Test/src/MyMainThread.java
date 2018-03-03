
public class MyMainThread {

	public static void main(String args[]) {

		Thread thread_1 = new Thread(new MyTestThread("Process A"));
		thread_1.start();

		MyTestThread thread_2 = new MyTestThread("Process B ");
		thread_2.start();
	}
}

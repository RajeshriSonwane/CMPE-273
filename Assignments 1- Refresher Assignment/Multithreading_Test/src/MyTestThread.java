
public class MyTestThread extends Thread {
	String myThreadName;
	Thread t_thread;

	MyTestThread(String t_name) {
		myThreadName = t_name;
		System.out.println("Creating Thread - " + myThreadName);
	}

	public void start() {
		System.out.println("Starting Thread -  " + myThreadName);
		if (t_thread == null) {
			t_thread = new Thread(this, myThreadName);
			t_thread.start();
		}
	}

	public void run() {

		System.out.println("Running Thread - " + myThreadName);

		for (int cnt = 0; cnt < 3; cnt++) {
			System.out.println("Executing " + myThreadName + " - Thread - " + cnt);
			try {
				Thread.sleep(5);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		System.out.println(myThreadName + " over");
	}
}
package com.controller;

import com.entity.About;
import com.entity.User;
import com.service.UserService;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.w3c.dom.html.HTMLParagraphElement;

import java.io.File;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Controller // This means that this class is a Controller
@CrossOrigin(origins = { "http://localhost:3000" })
@RequestMapping(path = "/user") // This means URL's start with /demo (after
								// Application path)
public class UserController {
	@Autowired
	private UserService userService;

	@GetMapping(path = "/all", produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody Iterable<User> getAllUsers() {
		// This returns a JSON with the users
		return userService.getAllUsers();
	}

	@PostMapping(path = "/addAbout", consumes = MediaType.APPLICATION_JSON_VALUE) // Map
	// ONLY
	// POST
	// Requests
	public ResponseEntity<?> AddAbout(@RequestBody About about) {
		// @ResponseBody means the returned String is the response, not a view
		// name
		// @RequestParam means it is a parameter from the GET or POST request
		userService.addAbout(about);
		System.out.println("details added successfully");
		return new ResponseEntity(HttpStatus.CREATED);
	}

	@PostMapping(path = "/list", consumes = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody String[][] list(@RequestBody String user) {
		System.out.println("List Directory Hit");
		JSONObject jsonObject = new JSONObject(user);
		String username = jsonObject.getString("username");

		File folder = new File("./files/" + username);// +
														// pathJSON.getString("path"));
		String[] files = folder.list();

		System.out.println(files);

		String[] filess = new String[3];
		String[] folders = new String[3];
		String[][] result = new String[2][3];

		int i = 0, j = 0, k = 0, l = 0;

		for (String item : files) {
			File f = new File("./files/" + username + "/" + item);
			if (f.isFile()) {
				filess[i] = item;
				System.out.println("inside filess" + filess[i] + " " + i);
				i++;
			} else {
				folders[j] = item;
				System.out.println("inside folders " + folders[j] + " " + j);
				j++;
			}
		}
		// return new ResponseEntity(HttpStatus.OK);
		for (String s : filess) {
			result[0][k] = s;
			k++;
		}
		for (String f : folders) {
			result[1][l] = f;
			l++;
		}
		return result;
	}

	@PostMapping(path = "/login", consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> login(@RequestBody String user, HttpSession session) {
		System.out.println("Login Hit");
		JSONObject jsonObject = new JSONObject(user);
		session.setAttribute("name", jsonObject.getString("username"));

		List<User> b = userService.login(jsonObject.getString("username"), jsonObject.getString("password"));
		System.out.println("if " + b.isEmpty());
		if (b.isEmpty()) {
			return new ResponseEntity(HttpStatus.FORBIDDEN);
		} else {
			return new ResponseEntity(HttpStatus.OK);
		}
	}

	@PostMapping(path = "/signup", consumes = MediaType.APPLICATION_JSON_VALUE) // Map
																				// ONLY
																				// POST
																				// Requests
	public ResponseEntity<?> addNewUser(@RequestBody User user) {
		// @ResponseBody means the returned String is the response, not a view
		// name
		// @RequestParam means it is a parameter from the GET or POST request
		userService.addUser(user);
		System.out.println("Signup successfull");
		return new ResponseEntity(HttpStatus.CREATED);
	}

	@PostMapping(value = "/logout")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public ResponseEntity<?> logout(HttpSession session) {
		System.out.println(session.getAttribute("name"));
		session.invalidate();
		return new ResponseEntity(HttpStatus.OK);
	}
}
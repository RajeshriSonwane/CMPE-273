package com.service;

import com.entity.User;
import com.repository.AboutRepository;
import com.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.entity.About;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    private AboutRepository aboutRepository;

    public Iterable<User> getAllUsers(){
        return userRepository.findAll();
    }

    public void addUser(User user){
        userRepository.save(user);
    }
    
    public void addAbout(About about){
    	aboutRepository.save(about);
    }
    
    public List<User> login(String email,String password){
        return userRepository.findByEmailAndPassword(email,password);
    }
   
}
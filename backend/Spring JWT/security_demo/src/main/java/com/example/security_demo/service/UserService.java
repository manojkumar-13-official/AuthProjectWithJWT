package com.example.security_demo.service;

import com.example.security_demo.model.Users;
import com.example.security_demo.repository.UserDetailsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder(12);

    @Autowired
    private UserDetailsRepo repo;

    public void addUser(Users user) throws RuntimeException {
        // Check if username already exists
        Users existingUser = repo.getUsersByName(user.getUsername());
        if (existingUser != null) {
            throw new RuntimeException("Username already exists");
        }
        
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        repo.save(user);
    }
}

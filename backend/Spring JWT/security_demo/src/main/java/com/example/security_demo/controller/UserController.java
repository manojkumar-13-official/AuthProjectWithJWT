package com.example.security_demo.controller;

import com.example.security_demo.model.Users;
import com.example.security_demo.service.JwtService;
import com.example.security_demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
public class UserController {

    @Autowired
    UserService service;

    @Autowired
    private JwtService jwtService;

    @Autowired
    AuthenticationManager authenticationManager;

    public UserController(UserService service) {
        this.service = service;
    }

    @PostMapping("/register")
    public ResponseEntity<Map<String, String>> register(@RequestBody Users user){
        try {
            if (user.getUsername() == null || user.getUsername().isEmpty() ||
                user.getPassword() == null || user.getPassword().isEmpty() ||
                user.getName() == null || user.getName().isEmpty()) {
                Map<String, String> errorResponse = new HashMap<>();
                errorResponse.put("message", "All fields are required");
                return ResponseEntity.badRequest().body(errorResponse);
            }
            
            service.addUser(user);
            Map<String, String> response = new HashMap<>();
            response.put("message", "User registered successfully");
            response.put("username", user.getUsername());
            return ResponseEntity.ok(response);
        } catch (RuntimeException e) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("message", e.getMessage());
            return ResponseEntity.badRequest().body(errorResponse);
        } catch (Exception e) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("message", "Registration failed: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }

    @PostMapping("/login")
    public String login(@RequestBody Users user){
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(),user.getPassword()));
        if(authentication.isAuthenticated())
            return jwtService.generateToken(user.getUsername());
        else
            return "Login Failed";
//        return authentication.isAuthenticated() ? "Success":"Not found";
    }
}

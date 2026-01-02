package com.example.security_demo.controller;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MyController {

    @GetMapping("/hello")
    public String getMessage(HttpServletRequest request){
        return "Hello, this is security application example -> "+request.getSession().getId();
    }
}

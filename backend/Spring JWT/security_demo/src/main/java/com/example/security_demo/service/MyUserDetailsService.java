package com.example.security_demo.service;

import com.example.security_demo.model.UserPrincipal;
import com.example.security_demo.model.Users;
import com.example.security_demo.repository.UserDetailsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class MyUserDetailsService implements UserDetailsService {

    @Autowired
    private UserDetailsRepo repo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Users user = repo.getUsersByName(username);
        if(user == null){
            throw new UsernameNotFoundException("User Not Found");
        }
        return new UserPrincipal(user);
    }
}

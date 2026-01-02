package com.example.security_demo.repository;

import com.example.security_demo.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDetailsRepo extends JpaRepository<Users,Integer> {

//    Users getByUserName(String username);

    @Query("SELECT u FROM Users u WHERE u.username = :username")
    Users getUsersByName(@Param("username") String username);

}

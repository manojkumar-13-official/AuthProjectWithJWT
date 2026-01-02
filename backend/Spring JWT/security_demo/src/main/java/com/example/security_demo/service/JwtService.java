package com.example.security_demo.service;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Service;

import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;
import java.security.Key;
import java.security.KeyFactory;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Service
public class JwtService {

    private String secretKey;

    public JwtService() throws NoSuchAlgorithmException {
        secretKey = getSecretKey();
    }

    private String getSecretKey() throws NoSuchAlgorithmException {
        KeyGenerator keyGenerator = KeyGenerator.getInstance("HmacSHA256");
        SecretKey secretKey1 = keyGenerator.generateKey();
        return Base64.getEncoder().encodeToString(secretKey1.getEncoded());
    }


    private static final String SECRET =  "TmV3U2VjcmV0S2V5Rm9ySldUU29uZ2luZ21hc2sgZmF2b3I=";

    public String generateToken(String username) {
        Map<String,Object> claims = new HashMap<>();
        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 100*60*60))
                .signWith(getKey(), SignatureAlgorithm.HS256)
                .setSubject(username)
                .compact();
    }

    private Key getKey(){
        byte[] key = Decoders.BASE64.decode(SECRET);
        return Keys.hmacShaKeyFor(key);
    }
}

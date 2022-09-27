package dh.rentcar.config.security.jwt;

import dh.rentcar.model.entities.jwt.MainUserAuth;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;
import io.jsonwebtoken.Claims;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/**
 * Generate token
 **/
@Slf4j
@Component
public class JwtProviderConfig {
    @Value("${jwt.secret:default}")
    private String secret;
    @Value("${jwt.expiration:1}")
    private int expiration;

    public String generateToken(Authentication auth) {
        MainUserAuth mainUserAuth = (MainUserAuth) auth.getPrincipal();
        Map<String, Object> claims = new HashMap<>();
        claims.put("email", mainUserAuth.getEmail());
        claims.put("lastName",mainUserAuth.getLastName());
        claims.put("name",mainUserAuth.getName());
        return Jwts.builder()
                .setSubject(mainUserAuth.getName())
                .addClaims(claims)
                .setIssuedAt(new Date())
                .setExpiration(new Date(new Date().getTime() + expiration * 3600))
                .signWith(SignatureAlgorithm.HS512, secret).compact();
    }
    public String getUserNameFromToken(String token) {
        return Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody().getSubject();
    }
    @SneakyThrows
    public Boolean validateToken(String token) {
        Claims claims = Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody();
        Boolean isTokenExpired = claims.getExpiration().before(new Date());
        return (!isTokenExpired);
    }
}
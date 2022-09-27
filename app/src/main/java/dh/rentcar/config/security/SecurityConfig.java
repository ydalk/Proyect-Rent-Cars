package dh.rentcar.config.security;

import dh.rentcar.config.security.jwt.JwtEntryPointConfig;
import dh.rentcar.config.security.jwt.JwtTokenFilterConfig;
import dh.rentcar.model.service.jwt.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.core.Ordered;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import java.util.Arrays;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig {
    @Autowired
    private UserDetailsServiceImpl userDetailsService;
    @Autowired
    private JwtEntryPointConfig jwtEntryPointConfig;

    @Bean
    public JwtTokenFilterConfig jwtTokenFilter() {
        return new JwtTokenFilterConfig();
    }
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean("authenticationManager")
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration)
            throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }
    @Primary
    @Bean
    protected HttpSecurity configure(HttpSecurity http) throws Exception {
        http.csrf().disable()
                .authorizeRequests()
                .antMatchers(HttpMethod.POST, "/auth/**", "/user/**").permitAll()
                .antMatchers(HttpMethod.GET, "/products/**", "/categories/**"
                        , "/cities/**", "/features/**","/productFeature/**", "/images/**","/reservation/**").permitAll()
                .antMatchers(HttpMethod.POST, "/products/**", "/categories/**"
                        , "/cities/**", "/features/**","/productFeature/**"
                        , "/role/**", "/images/**").permitAll() //.hasAnyRole("ADMIN")
                .antMatchers(HttpMethod.PUT, "/products/**","/categories/**"
                        ,"/cities/**", "/features/**","/productFeature/**"
                        , "/role/**", "/user/**", "/images/**").permitAll() //.hasAnyRole("ADMIN")
                .antMatchers(HttpMethod.DELETE, "/products/**", "/categories/**"
                        , "/cities/**", "/features/**", "/productFeature/**"
                        , "/role/**", "/user/**", "/images/**").permitAll() //.hasAnyRole("ADMIN")
                .antMatchers(HttpMethod.GET, "/role/**", "/user/**").permitAll() //.hasAnyRole("ADMIN")
                .antMatchers(HttpMethod.POST, "/reservation/**").permitAll() //.hasAnyRole("USER", "ADMIN")
                .antMatchers(HttpMethod.PUT, "/reservation/**").permitAll() //.hasAnyRole("USER", "ADMIN")
                .antMatchers(HttpMethod.DELETE, "/reservation/**").permitAll() //.hasAnyRole("USER", "ADMIN")
                .and()
                .exceptionHandling().authenticationEntryPoint(jwtEntryPointConfig)
                .and()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
        http.addFilterBefore(jwtTokenFilter(), UsernamePasswordAuthenticationFilter.class);
        return  http;
    }
    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowedOriginPatterns(Arrays.asList("*"));
        //config.setAllowedOrigins(Arrays.asList("http://localhost:4200", "*"));
        config.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        config.setAllowCredentials(true);
        config.setAllowedHeaders(Arrays.asList("Content-Type", "Authorization"));
        UrlBasedCorsConfigurationSource cors = new UrlBasedCorsConfigurationSource();
        cors.registerCorsConfiguration("/**", config);
        return cors;
    }

    @Bean
    public FilterRegistrationBean<CorsFilter> corsFilter() {
        FilterRegistrationBean<CorsFilter> bean = new FilterRegistrationBean<CorsFilter>(new CorsFilter(corsConfigurationSource()));
        bean.setOrder(Ordered.HIGHEST_PRECEDENCE);
        return bean;
    }
}
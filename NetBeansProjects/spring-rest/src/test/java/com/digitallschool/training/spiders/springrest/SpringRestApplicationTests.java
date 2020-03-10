package com.digitallschool.training.spiders.springrest;

import java.net.URI;
import java.net.URISyntaxException;
import junit.framework.Assert;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.client.RestTemplate;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)    

class SpringRestApplicationTests {

    @LocalServerPort
    int randomServerPort;
    
	@Test
	public void testGetCandidateList() throws URISyntaxException{
            RestTemplate restTemplate=new RestTemplate();
            final String baseURL="http://localhost:8085" +"/candidate/99";
            URI uri=new URI(baseURL);
            ResponseEntity<String> result=restTemplate.getForEntity(uri, String.class);
            Assert.assertEquals(200, result.getStatusCodeValue());
            
           //  Assert.assertEquals(true, result.getBody().contains("employeeList"));
            
        }
        
        
        

}

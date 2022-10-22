package com.api.backend.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

@Service
public class JoinService {

    Logger logger = LoggerFactory.getLogger(this.getClass());

    public void userJoin(ModelAndView mv, Map<String, Object> data) {
        logger.debug("[JOIN SERVICE USER JOIN] data : {} " ,data);
        try {
            mv.addObject("RESULT", "SUCCESS");
        } catch(Exception e) {
            e.printStackTrace();
            mv.addObject("RESULT", "ERROR");
        }
    }

}

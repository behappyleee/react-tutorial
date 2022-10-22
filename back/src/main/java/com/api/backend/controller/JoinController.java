package com.api.backend.controller;

import com.api.backend.service.JoinService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

@Controller
@CrossOrigin("*")
public class JoinController {

    Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    JoinService joinService;

    @PostMapping("/userJoin")
    public ModelAndView userJoin(ModelAndView mv, @RequestBody Map<String, Object> data) {
        logger.debug("[JOINCONTROLLER USER JOIN ] DATA : {} " ,data);
        joinService.userJoin(mv, data);
        return mv;
    }


}

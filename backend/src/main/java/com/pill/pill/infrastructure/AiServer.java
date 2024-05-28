package com.pill.pill.infrastructure;


import com.pill.pill.domain.Pill;
import org.springframework.web.multipart.MultipartFile;

public interface AiServer {

    String search(MultipartFile front, MultipartFile back);
}

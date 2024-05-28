package com.pill.pill.service;

import com.pill.pill.domain.Pill;
import com.pill.pill.dto.PillDetailDto;
import com.pill.pill.infrastructure.AiServer;
import com.pill.pill.repository.PillRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

//@Service
@Transactional
@RequiredArgsConstructor
public class FakePillService implements PillService {

    private final PillRepository pillRepository;
    private final AiServer aiServer;

    @Override
    public PillDetailDto searchPill(MultipartFile frontImage, MultipartFile backImage) {
        String code = aiServer.search(frontImage, backImage);
        Pill pill = pillRepository.findByCode(code);
        return new PillDetailDto(
                pill.getName(),
                pill.getEffect(),
                pill.getDosing(),
                pill.getCaution(),
                pill.getImageUrl()
        );
    }
}

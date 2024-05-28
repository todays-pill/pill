package com.pill.pill.repository;

import com.pill.pill.domain.Pill;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PillRepository extends JpaRepository<Pill,Long> {
    Pill findByCode(String code);
}

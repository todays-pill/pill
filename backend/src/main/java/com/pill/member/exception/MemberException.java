package com.pill.member.exception;

import com.pill.global.exception.CoreException;

public class MemberException extends CoreException {
    public MemberException(String message) {
        super(message);
    }

    public static class NotFoundMemberException extends MemberException {

        public NotFoundMemberException() {
            super("Member를 찾을 수 없습니다.");
        }
    }
}

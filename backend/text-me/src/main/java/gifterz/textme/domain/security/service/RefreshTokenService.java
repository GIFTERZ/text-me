package gifterz.textme.domain.security.service;

import gifterz.textme.domain.security.entity.RefreshToken;
import gifterz.textme.domain.security.jwt.JwtUtils;
import gifterz.textme.domain.security.repository.RefreshTokenRepository;
import gifterz.textme.domain.user.dto.response.TokenRefreshResponse;
import gifterz.textme.domain.user.entity.User;
import gifterz.textme.domain.user.exception.TokenRefreshException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.Optional;
import java.util.UUID;


@Service
@RequiredArgsConstructor
public class RefreshTokenService {
    @Value("${security.jwt.token.refreshExpirationMs}")
    private Long refreshTokenDurationMs;
    private final RefreshTokenRepository refreshTokenRepository;
    private final JwtUtils jwtUtils;


    public RefreshToken createRefreshToken(User user) {
        RefreshToken refreshToken =
                new RefreshToken(user, UUID.randomUUID().toString(), Instant.now().plusMillis(refreshTokenDurationMs));

        refreshTokenRepository.save(refreshToken);
        return refreshToken;
    }

    public TokenRefreshResponse refreshTokens(String token) {
        RefreshToken refreshToken = findByToken(token)
                .orElseThrow(() -> new TokenRefreshException(token, "refreshToken이 DB에 존재하지 않습니다."));
        verifyExpiration(refreshToken);
        User user = refreshToken.getUser();
        String newToken = jwtUtils.generateAccessToken(user.getEmail());
        return new TokenRefreshResponse(newToken, refreshToken.getRefreshToken(), refreshToken.getCreatedAt());
    }

    private Optional<RefreshToken> findByToken(String token) {
        return refreshTokenRepository.findByToken(token);
    }

    private void verifyExpiration(RefreshToken token) {
        if (token.getExpiryDate().compareTo(Instant.now()) < 0) {
            refreshTokenRepository.delete(token);
            throw new TokenRefreshException(token.getRefreshToken(),
                    "리프레시토큰이 만료되었습니다.");
        }
    }
}

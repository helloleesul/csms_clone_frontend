export const mapResponseToDTO = <T, U>(
  responseDTO: U,
  propertyMappings?: Record<string, keyof T>,
): T => {
  // 매핑된 DTO를 담을 빈 객체를 만듭니다.
  const mappedDTO: Partial<T> = {};

  // 응답DTO의 각 프로퍼티를 반복합니다.
  for (const key in responseDTO) {
    // 속성 매핑이 존재하는지, 현재 키가 속성 매핑에 있는지 확인합니다.
    if (propertyMappings && key in propertyMappings) {
      // 현재 키에 대한 매핑이 있는 경우 이를 사용하여 매핑된 DTO에서 속성을 설정합니다.
      mappedDTO[propertyMappings[key] as keyof T] = responseDTO[
        key
      ] as unknown as T[keyof T];
    } else {
      // 현재 키에 대한 매핑이 없는 경우 키를 그대로 사용하여 매핑된 DTO에 프로퍼티를 설정합니다.
      mappedDTO[key as unknown as keyof T] = responseDTO[
        key
      ] as unknown as T[keyof T];
    }
  }

  // 매핑된 DTO를 T 타입으로 반환합니다.
  return mappedDTO as T;
};

export interface AlarmResponsInterface {
  id: string;
  type: string;
  latitude: number;
  longitude: number;
  vehicleId: string;
  imei: string;
  acc: string;
  door: string;
  speed: string;
  created_at: Date;
}

export interface AlarmStatsResponse {
  data: number[];
  labels: string[];
}

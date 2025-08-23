// CORS headers for API responses
export const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Max-Age': '86400',
};

// Response with CORS headers
export function corsResponse(data, options = {}) {
  const { status = 200, headers = {} } = options;
  
  return Response.json(data, {
    status,
    headers: {
      ...corsHeaders,
      ...headers
    }
  });
}

// Handle OPTIONS preflight requests
export function corsOptionsResponse() {
  return new Response(null, {
    status: 200,
    headers: corsHeaders
  });
}

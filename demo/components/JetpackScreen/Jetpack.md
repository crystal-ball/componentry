Jetpack styles collection

## Icons

## Grays

<div className="d-flex justify-content-center">
  {[100, 200, 300, 400, 500, 600, 700, 800, 900].map(gray =>(
    <div className="d-inline-block">
      <div className={`swatch bg-gray-${gray}`} />
      <div className={`text-gray-${gray}`}>text-gray-{gray}</div>
      <div className={`border-bottom border-gray-${gray}`} />
    </div>
  ))}
</div>

## Alerts
